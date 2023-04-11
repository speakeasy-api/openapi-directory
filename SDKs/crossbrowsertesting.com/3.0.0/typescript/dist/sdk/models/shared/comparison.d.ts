import { SpeakeasyBase } from "../../../internal/utils";
import { Element } from "./element";
export declare class Comparison extends SpeakeasyBase {
    differences?: number;
    elements?: Element[];
    error?: boolean;
    message?: string;
    showComparisonsPublicUrl?: string;
    showComparisonsWebUrl?: string;
    tolerance?: number;
}
