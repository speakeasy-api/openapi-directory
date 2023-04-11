import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    autoConfigEnabled?: boolean;
    cweMonitorEnabled?: boolean;
    opsCenterEnabled?: boolean;
    opsItemSNSTopicArn?: string;
    removeSNSTopic?: boolean;
    resourceGroupName: string;
}
