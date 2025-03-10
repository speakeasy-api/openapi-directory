/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand")
    public String expand;

    public DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest withExpand(String expand) {
        this.expand = expand;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id_connection")
    public Long idConnection;

    public DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest withIdConnection(Long idConnection) {
        this.idConnection = idConnection;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id_transactionscluster")
    public Long idTransactionscluster;

    public DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest withIdTransactionscluster(Long idTransactionscluster) {
        this.idTransactionscluster = idTransactionscluster;
        return this;
    }
    
    /**
     * Hint: you can use 'me' or 'all'
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id_user")
    public String idUser;

    public DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest withIdUser(String idUser) {
        this.idUser = idUser;
        return this;
    }
    
    public DeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRequest(@JsonProperty("id_connection") Long idConnection, @JsonProperty("id_transactionscluster") Long idTransactionscluster, @JsonProperty("id_user") String idUser) {
        this.idConnection = idConnection;
        this.idTransactionscluster = idTransactionscluster;
        this.idUser = idUser;
  }
}
