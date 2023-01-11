import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListPublicQueryParams extends SpeakeasyBase {
    since?: number;
    visibility?: shared.SinceRepoEnum;
}
export declare class ReposListPublicRequest extends SpeakeasyBase {
    queryParams: ReposListPublicQueryParams;
}
export declare class ReposListPublicResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    minimalRepositories?: shared.MinimalRepository[];
    validationError?: shared.ValidationError;
}
