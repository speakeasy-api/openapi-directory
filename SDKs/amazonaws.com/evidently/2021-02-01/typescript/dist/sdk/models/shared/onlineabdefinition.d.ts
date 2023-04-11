import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
 */
export declare class OnlineAbDefinition extends SpeakeasyBase {
    controlTreatmentName?: string;
    treatmentWeights?: Record<string, number>;
}
