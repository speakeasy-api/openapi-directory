import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionalityEnum } from "./directionalityenum";
import { TerminologyDataFormatEnum } from "./terminologydataformatenum";
/**
 * The data associated with the custom terminology. For information about the custom terminology file, see <a href="https://docs.aws.amazon.com/translate/latest/dg/creating-custom-terminology.html"> Creating a Custom Terminology</a>.
 */
export declare class TerminologyData extends SpeakeasyBase {
    directionality?: DirectionalityEnum;
    file: string;
    format: TerminologyDataFormatEnum;
}
