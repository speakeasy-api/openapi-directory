import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDestinationDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    destinationDefinitionReadList?: shared.DestinationDefinitionReadList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
