import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerServiceMetricsFilterCriteria } from "./customerservicemetricsfiltercriteria";
/**
 * The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
 */
export declare class CreateServiceMetricsTaskRequest extends SpeakeasyBase {
    /**
     * The <strong>feedType</strong> specified for the task. The report lists the transaction details that contribute to the service metrics evaluation. Supported types include:<p><code>CUSTOMER_SERVICE_METRICS_REPORT</code></p>
     */
    feedType?: string;
    /**
     * A complex data type that filters data for report creation. See <strong>CustomerServiceMetricsFilterCriteria</strong> for fields and descriptions.
     */
    filterCriteria?: CustomerServiceMetricsFilterCriteria;
    /**
     * The version number of the file format. <p><b>Valid value: </b><code>1.0</code><p>
     */
    schemaVersion?: string;
}
