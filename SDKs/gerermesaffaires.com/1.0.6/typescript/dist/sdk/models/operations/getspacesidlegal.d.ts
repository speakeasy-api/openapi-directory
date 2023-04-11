import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdLegalRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdLegalResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Legal informations of a space
     */
    legal?: shared.Legal;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
