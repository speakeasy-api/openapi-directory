import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    cweMonitorEnabled?: boolean;
    opsCenterEnabled?: boolean;
    opsItemSNSTopicArn?: string;
    removeSNSTopic?: boolean;
    resourceGroupName: string;
}
