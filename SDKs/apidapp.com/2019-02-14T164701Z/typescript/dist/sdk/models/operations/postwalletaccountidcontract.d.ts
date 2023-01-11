import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostWalletAccountIdContractPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostWalletAccountIdContractRequest extends SpeakeasyBase {
    pathParams: PostWalletAccountIdContractPathParams;
}
export declare class PostWalletAccountIdContractResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    statusCode: number;
}
