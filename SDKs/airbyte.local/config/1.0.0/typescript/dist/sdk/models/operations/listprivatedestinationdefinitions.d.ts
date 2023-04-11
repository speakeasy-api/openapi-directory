import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPrivateDestinationDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    privateDestinationDefinitionReadList?: shared.PrivateDestinationDefinitionReadList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
