import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a definition.
**/
export declare class DefinitionInformation extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    id?: string;
    lastUpdatedTimestamp?: string;
    latestVersion?: string;
    latestVersionArn?: string;
    name?: string;
    tags?: Record<string, string>;
}
