import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPrivateSourceDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    privateSourceDefinitionReadList?: shared.PrivateSourceDefinitionReadList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
