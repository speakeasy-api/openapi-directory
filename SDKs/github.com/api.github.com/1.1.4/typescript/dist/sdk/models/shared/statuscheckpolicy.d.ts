import { SpeakeasyBase } from "../../../internal/utils";
export declare class StatusCheckPolicyChecks extends SpeakeasyBase {
    appId: number;
    context: string;
}
/**
 * Status Check Policy
 */
export declare class StatusCheckPolicy extends SpeakeasyBase {
    checks: StatusCheckPolicyChecks[];
    contexts: string[];
    contextsUrl: string;
    strict: boolean;
    url: string;
}
