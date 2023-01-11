import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListRegistryRepositoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}


export class ListRegistryRepositoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListRegistryRepositories200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListRegistryRepositories200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListRegistryRepositories200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListRegistryRepositories200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListRegistryRepositories200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compressed_size_bytes" })
  compressedSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=manifest_digest" })
  manifestDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_name" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=repository_name" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=size_bytes" })
  sizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class ListRegistryRepositories200ApplicationJsonRepositories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latest_tag" })
  latestTag?: ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_name" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=tag_count" })
  tagCount?: number;
}


export class ListRegistryRepositories200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListRegistryRepositories200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListRegistryRepositories200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: ListRegistryRepositories200ApplicationJsonRepositories })
  repositories?: ListRegistryRepositories200ApplicationJsonRepositories[];
}


export class ListRegistryRepositories401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListRegistryRepositoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListRegistryRepositoriesPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRegistryRepositoriesQueryParams;
}


export class ListRegistryRepositoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listRegistryRepositories200ApplicationJSONObject?: ListRegistryRepositories200ApplicationJson;

  @SpeakeasyMetadata()
  listRegistryRepositories401ApplicationJSONObject?: ListRegistryRepositories401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
