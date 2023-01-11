package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoardList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("board_count")
    public Integer boardCount;
    public BoardList withBoardCount(Integer boardCount) {
        this.boardCount = boardCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boards")
    public BoardListBoard[] boards;
    public BoardList withBoards(BoardListBoard[] boards) {
        this.boards = boards;
        return this;
    }
}