import { SpeakeasyBase } from "../../../internal/utils";
import { ThingGroupIndexingConfiguration } from "./thinggroupindexingconfiguration";
import { ThingIndexingConfiguration } from "./thingindexingconfiguration";
/**
 * Success
 */
export declare class GetIndexingConfigurationResponse extends SpeakeasyBase {
    thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
    thingIndexingConfiguration?: ThingIndexingConfiguration;
}
