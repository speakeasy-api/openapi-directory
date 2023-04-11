import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateTypeEnum } from "./aggregatetypeenum";
import { QualityEnum } from "./qualityenum";
import { TimeOrderingEnum } from "./timeorderingenum";
/**
 * <p>Contains information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
 */
export declare class BatchGetAssetPropertyAggregatesEntry extends SpeakeasyBase {
    aggregateTypes: AggregateTypeEnum[];
    assetId?: string;
    endDate: Date;
    entryId: string;
    propertyAlias?: string;
    propertyId?: string;
    qualities?: QualityEnum[];
    resolution: string;
    startDate: Date;
    timeOrdering?: TimeOrderingEnum;
}
