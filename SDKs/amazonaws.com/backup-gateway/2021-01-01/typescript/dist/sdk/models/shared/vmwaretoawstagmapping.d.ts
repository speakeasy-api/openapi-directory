import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This displays the mapping of on-premises VMware tags to the corresponding Amazon Web Services tags.
 */
export declare class VmwareToAwsTagMapping extends SpeakeasyBase {
    awsTagKey: string;
    awsTagValue: string;
    vmwareCategory: string;
    vmwareTagName: string;
}
