import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminCreatePreReceiveEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * URL from which to download a tarball of this environment.
     */
    imageUrl: string;
    /**
     * The new pre-receive environment's name.
     */
    name: string;
}
export declare class EnterpriseAdminCreatePreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
