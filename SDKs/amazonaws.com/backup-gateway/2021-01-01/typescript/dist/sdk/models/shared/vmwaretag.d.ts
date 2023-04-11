import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A VMware tag is a tag attached to a specific virtual machine. A <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_Tag.html">tag</a> is a key-value pair you can use to manage, filter, and search for your resources.</p> <p>The content of VMware tags can be matched to Amazon Web Services tags.</p>
 */
export declare class VmwareTag extends SpeakeasyBase {
    vmwareCategory?: string;
    vmwareTagDescription?: string;
    vmwareTagName?: string;
}
