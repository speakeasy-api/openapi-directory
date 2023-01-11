import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConnectionResponseIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceIp" })
  sourceIp: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UserAgent" })
  userAgent: Record<string, any>;
}


export class GetConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectedAt" })
  connectedAt?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Identity" })
  identity?: GetConnectionResponseIdentity;

  @SpeakeasyMetadata({ data: "json, name=LastActiveAt" })
  lastActiveAt?: Record<string, any>;
}
