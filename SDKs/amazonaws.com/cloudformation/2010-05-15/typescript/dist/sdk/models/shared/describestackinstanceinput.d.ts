import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
export declare class DescribeStackInstanceInput extends SpeakeasyBase {
    callAs?: CallAsEnum;
    stackInstanceAccount: string;
    stackInstanceRegion: string;
    stackSetName: string;
}
