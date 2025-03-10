/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A paginated list of projects
 */
export class PaginatedProjects extends SpeakeasyBase {
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  page?: number;

  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pagelen" })
  pagelen?: number;

  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "values" })
  values?: Record<string, any>[];
}
