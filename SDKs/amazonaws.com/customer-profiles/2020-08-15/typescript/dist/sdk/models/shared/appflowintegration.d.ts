import { SpeakeasyBase } from "../../../internal/utils";
import { Batch } from "./batch";
import { FlowDefinition } from "./flowdefinition";
/**
 * Details for workflow of type <code>APPFLOW_INTEGRATION</code>.
 */
export declare class AppflowIntegration extends SpeakeasyBase {
    batches?: Batch[];
    /**
     * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
     */
    flowDefinition: FlowDefinition;
}
