import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProjectUsernameProjectTreeBranchPathParams extends SpeakeasyBase {
    branch: string;
    project: string;
    username: string;
}
export declare class PostProjectUsernameProjectTreeBranchRequestBody extends SpeakeasyBase {
    buildParameters?: Record<string, any>;
    parallel?: string;
    revision?: string;
}
export declare class PostProjectUsernameProjectTreeBranchRequest extends SpeakeasyBase {
    pathParams: PostProjectUsernameProjectTreeBranchPathParams;
    request?: PostProjectUsernameProjectTreeBranchRequestBody;
}
export declare class PostProjectUsernameProjectTreeBranchResponse extends SpeakeasyBase {
    build?: shared.Build;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
