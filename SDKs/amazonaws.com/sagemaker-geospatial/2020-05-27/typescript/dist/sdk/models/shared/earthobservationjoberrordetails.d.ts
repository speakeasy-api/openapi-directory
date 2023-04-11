import { SpeakeasyBase } from "../../../internal/utils";
import { EarthObservationJobErrorTypeEnum } from "./earthobservationjoberrortypeenum";
/**
 * The structure representing the errors in an EarthObservationJob.
 */
export declare class EarthObservationJobErrorDetails extends SpeakeasyBase {
    message?: string;
    type?: EarthObservationJobErrorTypeEnum;
}
