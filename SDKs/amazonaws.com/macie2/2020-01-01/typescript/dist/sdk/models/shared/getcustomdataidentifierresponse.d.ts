import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityLevel } from "./severitylevel";
/**
 * Success
 */
export declare class GetCustomDataIdentifierResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    deleted?: boolean;
    description?: string;
    id?: string;
    ignoreWords?: string[];
    keywords?: string[];
    maximumMatchDistance?: number;
    name?: string;
    regex?: string;
    severityLevels?: SeverityLevel[];
    tags?: Record<string, string>;
}
