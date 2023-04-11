import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
import { ModelDashboardEndpoint } from "./modeldashboardendpoint";
import { ModelDashboardModelCard } from "./modeldashboardmodelcard";
import { ModelDashboardMonitoringSchedule } from "./modeldashboardmonitoringschedule";
import { TransformJob } from "./transformjob";
/**
 * A model displayed in the Amazon SageMaker Model Dashboard.
 */
export declare class ModelDashboardModel extends SpeakeasyBase {
    endpoints?: ModelDashboardEndpoint[];
    /**
     * A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch Transform</a>.
     */
    lastBatchTransformJob?: TransformJob;
    model?: Model;
    modelCard?: ModelDashboardModelCard;
    monitoringSchedules?: ModelDashboardMonitoringSchedule[];
}
