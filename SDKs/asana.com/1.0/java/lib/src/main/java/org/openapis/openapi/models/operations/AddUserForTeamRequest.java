/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AddUserForTeamRequest {
    /**
     * The user to add to the team.
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddUserForTeamRequestBody requestBody;

    public AddUserForTeamRequest withRequestBody(AddUserForTeamRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * Defines fields to return.
     * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
     * The id of included objects will always be returned, regardless of the field options.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;

    public AddUserForTeamRequest withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    
    /**
     * Provides \u201cpretty\u201d output.
     * Provides the response in a \u201cpretty\u201d format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;

    public AddUserForTeamRequest withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    
    /**
     * Globally unique identifier for the team.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_gid")
    public String teamGid;

    public AddUserForTeamRequest withTeamGid(String teamGid) {
        this.teamGid = teamGid;
        return this;
    }
    
    public AddUserForTeamRequest(@JsonProperty("RequestBody") AddUserForTeamRequestBody requestBody, @JsonProperty("team_gid") String teamGid) {
        this.requestBody = requestBody;
        this.teamGid = teamGid;
  }
}
