import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Manage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addClutter - Upload clutter data as GeoJSON
     *
     * Upload GeoJSON lineString and polygon features to your account. The height property is in metres and the material code / type / attenuation are.. 1	Trees –	0.25,2Trees +	0.5,3	Timber –	1.0,4	Timber +	1.5,5	Brick – 	1.5,6	Brick +	2.0,7	Concrete –	3.0,8	Concrete +	4.0,9	Metal	6.0
    **/
    addClutter(req: operations.AddClutterRequest, config?: AxiosRequestConfig): Promise<operations.AddClutterResponse>;
    /**
     * delete - Delete a calculation from the database.
     *
     * Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.
    **/
    delete(req: operations.DeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResponse>;
    /**
     * deleteNetwork - Delete an entire network
     *
     * Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.
    **/
    deleteNetwork(req: operations.DeleteNetworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkResponse>;
    /**
     * export - Export a calculation in a GIS file format
     *
     * Download your data in a format suitable for a third party viewer like Google Earth or ESRI Arcmap.
    **/
    export(req: operations.ExportRequest, config?: AxiosRequestConfig): Promise<operations.ExportResponse>;
    /**
     * list - List calculations from your archive
     *
     * List your area and path calculations, sorted by time and limited to the last few hundred. To fetch all for a given network append a 'net' filter with the network name.
    **/
    list(req: operations.ListRequest, config?: AxiosRequestConfig): Promise<operations.ListResponse>;
}
