import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdProfessionalVehicleRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Professional vehicle to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdProfessionalVehicleRequestBody extends SpeakeasyBase {
    about?: string;
    brand?: string;
    comment?: string;
    companyTax?: boolean;
    dateIn?: string;
    dateOut?: string;
    designation?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdProfessionalVehicleRequestBodyLevelEnum;
    model?: string;
    registrationDate?: string;
    registrationNumber?: string;
    type?: string;
    value?: number;
}
export declare class PatchSpacesSpaceIdFoldersIdProfessionalVehicleRequest extends SpeakeasyBase {
    /**
     * Professional vehicle to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdProfessionalVehicleRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdProfessionalVehicleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
