import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestUpdateArtifactPathParams extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
}
export declare class TestUpdateArtifactRequest extends SpeakeasyBase {
    pathParams: TestUpdateArtifactPathParams;
    request: Uint8Array;
}
export declare class TestUpdateArtifactResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    ruleViolationError?: shared.RuleViolationError;
    statusCode: number;
}
