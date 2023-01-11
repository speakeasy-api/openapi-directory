import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestUrlRewritingRulesPathParams extends SpeakeasyBase {
    projectSlug: string;
    username: string;
}
export declare class TestUrlRewritingRulesRequest extends SpeakeasyBase {
    pathParams: TestUrlRewritingRulesPathParams;
}
export declare class TestUrlRewritingRulesResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    urlRewritingRulesSerializer?: shared.UrlRewritingRulesSerializer;
}
