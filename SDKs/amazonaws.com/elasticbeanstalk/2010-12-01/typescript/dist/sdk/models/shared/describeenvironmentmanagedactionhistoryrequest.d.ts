import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to list completed and failed managed actions.
 */
export declare class DescribeEnvironmentManagedActionHistoryRequest extends SpeakeasyBase {
    environmentId?: string;
    environmentName?: string;
    maxItems?: number;
    nextToken?: string;
}
