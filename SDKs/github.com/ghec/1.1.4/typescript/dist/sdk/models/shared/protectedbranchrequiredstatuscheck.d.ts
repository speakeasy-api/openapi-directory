import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtectedBranchRequiredStatusCheckChecks extends SpeakeasyBase {
    appId: number;
    context: string;
}
/**
 * Protected Branch Required Status Check
 */
export declare class ProtectedBranchRequiredStatusCheck extends SpeakeasyBase {
    checks: ProtectedBranchRequiredStatusCheckChecks[];
    contexts: string[];
    contextsUrl?: string;
    enforcementLevel?: string;
    strict?: boolean;
    url?: string;
}
