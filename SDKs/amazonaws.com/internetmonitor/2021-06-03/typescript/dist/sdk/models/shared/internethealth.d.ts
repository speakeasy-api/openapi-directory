import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityMeasurement } from "./availabilitymeasurement";
import { PerformanceMeasurement } from "./performancemeasurement";
/**
 * Internet health includes measurements calculated by Amazon CloudWatch Internet Monitor about the performance and availability for your application on the internet. Amazon Web Services has substantial historical data about internet performance and availability between Amazon Web Services services and different network providers and geographies. By applying statistical analysis to the data, Internet Monitor can detect when the performance and availability for your application has dropped, compared to an estimated baseline that's already calculated. To make it easier to see those drops, we report that information to you in the form of health scores: a performance score and an availability score.
 */
export declare class InternetHealth extends SpeakeasyBase {
    availability?: AvailabilityMeasurement;
    performance?: PerformanceMeasurement;
}
