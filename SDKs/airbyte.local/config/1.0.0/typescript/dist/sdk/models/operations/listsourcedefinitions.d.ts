import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSourceDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    sourceDefinitionReadList?: shared.SourceDefinitionReadList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
