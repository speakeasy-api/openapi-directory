import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of configuration sets in your Amazon SES account in the current Amazon Web Services Region.
 */
export declare class ListConfigurationSetsResponse extends SpeakeasyBase {
    configurationSets?: string[];
    nextToken?: string;
}
