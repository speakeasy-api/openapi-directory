import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RouteSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DetailedMetricsEnabled" })
  detailedMetricsEnabled?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: Record<string, any>;
}
