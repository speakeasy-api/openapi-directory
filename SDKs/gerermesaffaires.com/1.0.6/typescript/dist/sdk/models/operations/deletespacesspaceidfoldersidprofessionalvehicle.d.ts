import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesSpaceIdFoldersIdProfessionalVehicleRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class DeleteSpacesSpaceIdFoldersIdProfessionalVehicleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
