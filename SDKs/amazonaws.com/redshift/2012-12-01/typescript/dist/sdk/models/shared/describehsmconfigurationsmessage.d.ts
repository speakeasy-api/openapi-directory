import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeHsmConfigurationsMessage extends SpeakeasyBase {
    hsmConfigurationIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
}
