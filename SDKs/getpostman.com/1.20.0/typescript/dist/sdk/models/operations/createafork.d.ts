import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAForkRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class CreateAForkRequest extends SpeakeasyBase {
    requestBody?: CreateAForkRequestBody;
    collectionUid: string;
    /**
     * Workspace ID is required to create a fork
     */
    workspace?: string;
}
export declare class CreateAForkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
