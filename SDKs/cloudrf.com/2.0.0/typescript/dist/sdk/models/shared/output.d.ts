import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OutputUnitsEnum {
    Metric = "metric",
    Imperial = "imperial"
}
export declare class Output extends SpeakeasyBase {
    ber?: number;
    col?: string;
    mod?: number;
    nf?: number;
    out?: number;
    rad?: number;
    res?: number;
    units?: OutputUnitsEnum;
}
