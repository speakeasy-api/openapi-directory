import { SpeakeasyBase } from "../../../internal/utils";
import { KnownGenderTypeEnum } from "./knowngendertypeenum";
/**
 * The known gender identity for the celebrity that matches the provided ID. The known gender identity can be Male, Female, Nonbinary, or Unlisted.
 */
export declare class KnownGender extends SpeakeasyBase {
    type?: KnownGenderTypeEnum;
}
