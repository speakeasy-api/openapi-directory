import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdInsuranceRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdInsuranceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An insurance folder
     */
    insurance?: shared.Insurance;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
