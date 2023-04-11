import { SpeakeasyBase } from "../../../internal/utils";
import { HumanTaskUiStatusEnum } from "./humantaskuistatusenum";
import { UiTemplateInfo } from "./uitemplateinfo";
/**
 * Success
 */
export declare class DescribeHumanTaskUiResponse extends SpeakeasyBase {
    creationTime: Date;
    humanTaskUiArn: string;
    humanTaskUiName: string;
    humanTaskUiStatus?: HumanTaskUiStatusEnum;
    /**
     * Container for user interface template information.
     */
    uiTemplate: UiTemplateInfo;
}
