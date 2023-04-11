import { SpeakeasyBase } from "../../../internal/utils";
import { TestOutput } from "./testoutput";
/**
 * OK - the request has succeeded.
 */
export declare class TestWebhookResponse extends SpeakeasyBase {
    /**
     * List with test results. Each test webhook we send has a list element with the result.
     */
    data?: TestOutput[];
}
