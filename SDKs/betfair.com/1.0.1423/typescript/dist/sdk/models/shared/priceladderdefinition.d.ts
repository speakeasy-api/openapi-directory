import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PriceLadderDefinitionTypeEnum {
    Classic = "CLASSIC",
    Finest = "FINEST",
    LineRange = "LINE_RANGE"
}
export declare class PriceLadderDefinition extends SpeakeasyBase {
    type?: PriceLadderDefinitionTypeEnum;
}
