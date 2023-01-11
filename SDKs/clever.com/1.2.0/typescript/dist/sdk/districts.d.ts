import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Districts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAdminsForDistrict - Returns the admins for a district
    **/
    getAdminsForDistrict(req: operations.GetAdminsForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminsForDistrictResponse>;
    /**
     * getDistrict - Returns a specific district
    **/
    getDistrict(req: operations.GetDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictResponse>;
    /**
     * getDistrictStatus - Returns the status of the district
    **/
    getDistrictStatus(req: operations.GetDistrictStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictStatusResponse>;
    /**
     * getDistricts - Returns a list of districts
    **/
    getDistricts(config?: AxiosRequestConfig): Promise<operations.GetDistrictsResponse>;
    /**
     * getSchoolsForDistrict - Returns the schools for a district
    **/
    getSchoolsForDistrict(req: operations.GetSchoolsForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetSchoolsForDistrictResponse>;
    /**
     * getSectionsForDistrict - Returns the sections for a district
    **/
    getSectionsForDistrict(req: operations.GetSectionsForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForDistrictResponse>;
    /**
     * getStudentsForDistrict - Returns the students for a district
    **/
    getStudentsForDistrict(req: operations.GetStudentsForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentsForDistrictResponse>;
    /**
     * getTeachersForDistrict - Returns the teachers for a district
    **/
    getTeachersForDistrict(req: operations.GetTeachersForDistrictRequest, config?: AxiosRequestConfig): Promise<operations.GetTeachersForDistrictResponse>;
}
