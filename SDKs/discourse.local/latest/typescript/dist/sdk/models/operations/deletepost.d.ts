import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePostRequestBody extends SpeakeasyBase {
    /**
     * The `SiteSetting.can_permanently_delete` needs to be
     *
     * @remarks
     * enabled first before this param can be used. Also this endpoint
     * needs to be called first without `force_destroy` and then followed
     * up with a second call 5 minutes later with `force_destroy` to
     * permanently delete.
     */
    forceDestroy?: boolean;
}
export declare class DeletePostRequest extends SpeakeasyBase {
    requestBody?: DeletePostRequestBody;
    id: number;
}
export declare class DeletePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
