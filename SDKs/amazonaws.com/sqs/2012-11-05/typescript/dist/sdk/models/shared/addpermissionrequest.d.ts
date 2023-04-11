import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class AddPermissionRequest extends SpeakeasyBase {
    awsAccountIds: string[];
    actions: string[];
    label: string;
    queueUrl: string;
}
